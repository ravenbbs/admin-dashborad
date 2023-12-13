import clientPromise from "@/lib/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


// async function isAdminEmail(email) {
//   mongooseConnect();
//   return !! (await Admin.findOne({email}));
// }
const isAdminEmail = ['julioc3bgud@gmail.com', 'grunko24@gmail.com']

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    // session: ({session,token,user}) => {
    //   if ( isAdminEmail.includes(session?.user.email)) {
    //     return session;
    //   } else {
    //     return;
    //   }
    // },
  }
}

export default NextAuth(authOptions)

// export async function isAdminRequest(req,res) {
//   const session = useSession;
//   if (!(isAdminEmail.includes(session?.user?.email))) {
//     res.status(401);
//     res.end();
//     throw 'not an admin';
//   }
// }