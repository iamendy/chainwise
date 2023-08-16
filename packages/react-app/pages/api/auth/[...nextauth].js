import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import axios from "axios";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;

        // //make db call here
        // const { data } = await axios.post("/api/add-user", {
        //   address: "12324",
        // });
        // token.dbUser = data;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      //   session.dbUser = token.dbUser;
      //get db data here

      return session;
    },
  },
};

export default NextAuth(authOptions);
