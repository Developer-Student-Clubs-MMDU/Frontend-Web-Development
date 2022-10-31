To enable AMP, add the following config to your page:

```export const config = { amp: true }```
The amp config accepts the following values:

true - The page will be AMP-only
'hybrid' - The page will have two versions, one with AMP and another one with HTML
To learn more about the amp config, read the sections below.

AMP First Page
Take a look at the following example:

```export const config = { amp: true }

function About(props) {
  return <h3>My AMP About Page!</h3>
}

export default About```
The page above is an AMP-only page, which means:

The page has no Next.js or React client-side runtime
The page is automatically optimized with AMP Optimizer, an optimizer that applies the same transformations as AMP caches (improves performance by up to 42%)
The page has a user-accessible (optimized) version of the page and a search-engine indexable (unoptimized) version of the page
Hybrid AMP Page
Take a look at the following example:

```import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

function About(props) {
  const isAmp = useAmp()

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="/my-img.jpg"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="300" height="300" src="/my-img.jpg" alt="a cool image" />
      )}
    </div>
  )
}

export default About```
