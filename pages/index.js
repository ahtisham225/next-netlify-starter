export default function Home() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://royalcasinoapk.net/',
      permanent: true,
    },
  }
}
