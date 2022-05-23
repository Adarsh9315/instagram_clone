import type { NextPage } from 'next'
import { getProviders, signIn as signInToProvider } from 'next-auth/react'
import Header from '../../components/Header';

interface props {
  providers: Array<{ id: string, name: string }>;
  children?: React.ReactNode;
}

const SignIn: React.FC<props> = ({ providers }) => {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <img src="http://links.papareact.com/ocw" alt="" className='w-80' />
        <p className='font-xs italic'>
          This is not a REAL APP, it is build for educational purposes only
        </p>

        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.id}>
              <button onClick={() => signInToProvider(provider.id, {callbackUrl: '/'})} className="p-3 bg-blue-500 rounded-lg text-white">
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default SignIn
