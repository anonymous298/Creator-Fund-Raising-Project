import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User"
import mongoose from "mongoose"
import connectDb from "@/db/connectDB"

const authOpt = NextAuth({
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_SECRET
        })
    ],

    callbacks : {
        async signIn({user, account ,profile ,email, credentials}){

            if (account) {
                // Connect to db
                await connectDb()
                
                const currentUser = await User.findOne({email : email})
                // console.log(currentUser)
                
                if (!currentUser) {
                    const newUser = await User.create({
                        email : user.email,
                        username : user.email.split('@')[0],
                    })

                    // await newUser.save()
                    
                    // console.log(user, account, profile)
                }


                return true
            }
            
            // return true
        },

        async session({session, user, token}) {
            // await connectDb()
                
            const dbUser = await User.findOne({email : session.user.email})
            
            session.user.name = dbUser.username 

            return session
        },
    }
})

export {authOpt as GET, authOpt as POST};