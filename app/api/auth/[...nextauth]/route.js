import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOpt = NextAuth({
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        })
    ]
})

export {authOpt as GET, authOpt as POST};