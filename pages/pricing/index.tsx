import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export default function PricingPage() { // antes era home

  return (
    <MainLayout >
      <h1>Pricing Page</h1>

      {/* className={ 'title' } */}
      <h1 className='title'>
        Ir a <Link href="/">Home</Link>
      </h1>

      {/* styles.description */}
      <p className={'description'}>
        Get started by editing <code className={'code'}>
          pages/contact/index.jsx
        </code>
      </p>

    </MainLayout>
  )
}
