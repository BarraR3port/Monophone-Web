import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import mongoClient from "../../database/mongodb";


export default NextAuth({
    adapter: MongoDBAdapter(mongoClient),
    session: {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },

    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        })
    ],
    callbacks: {
        session({session, token, user}) {
            return session // The return type will match the one returned in `useSession()`
        },
    },
    events: {
        async signIn(message) {
            /* on successful sign in */
            console.log(message);
        },
    },
    secret: process.env.SECRET,

})
