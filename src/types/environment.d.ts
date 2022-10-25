namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        EMAIL_SERVER: string
        EMAIL_FROM: string
        DISCORD_CLIENT_ID: string
        DISCORD_CLIENT_SECRET: string
        AUTH0_ID: string
        AUTH0_SECRET: string
        AUTH0_DOMAIN: string
        DATABASE_URL: string
        SECRET: string
        MONGODB_URI: string
    }
}
