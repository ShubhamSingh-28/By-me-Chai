import User from "@/models/user"
import mongoose from "mongoose"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const connectDb =async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};

export const authOptions =NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks:{
  async signIn({account,user,}){
    if(account?.provider === 'github'){
      await connectDb() 
      try {
         const currentUser= await User.findOne({email:user.email})
      if(!currentUser){
        const Name = user.name.replace(/\s+/g, "")
        const Username = user.name.replace(/\s+/g, "")
       const newUser= new User({
        email:user.email,
        name:Name,
        username:Username,
       })
       
       await newUser.save()
      return true
      } 
      return true
      } catch (error) {
        console.log("Error while saving");
        return false
      }
  }
  },
  async session({session,user,token}){
    await connectDb()
    const dbuser = await User.findOne({email:session.user.email})
    session.user.name = dbuser?.name
    session.user.username = dbuser?.username
    return session
  }
  
}

})

export {authOptions as GET, authOptions as POST}