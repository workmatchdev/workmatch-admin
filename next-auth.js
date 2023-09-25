// auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password"  }
      },
      authorize: async (credentials) => {
        // Agrega aquí tu lógica de autenticación
        if (credentials.username === 'usuario' && credentials.password === 'contraseña') {
          return Promise.resolve({ id: 1, username: 'usuario' });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
});
