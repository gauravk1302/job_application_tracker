import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL : process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
});

export const {signIn, signUp, signOut, useSession} = authClient;// useSession is used to get the information about the user who has been logged in 