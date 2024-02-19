
# ![logo-text](https://github.com/sohomofficial/imaginify/assets/93909798/0fbe7ca7-676a-46b2-a25a-0aaa7cafff4d)
A Software-as-a-Service app with AI features and payments & credits system built using Next.js 14, Clerk, MongoDB, Cloudinary AI, and Stripe.

## Features

- **Authentication and Authorization:** Secure user access with registration, login, and route protection.

- **Community Image Showcase:** Explore user transformations with easy navigation using pagination

- **Advanced Image Search:** Find images by content or objects present inside the image quickly and accurately

- **Image Restoration:** Revive old or damaged images effortlessly

- **Image Recoloring:** Customize images by replacing objects with desired colors easily

- **Image Generative Fill:** Fill in missing areas of images seamlessly

- **Object Removal:** Clean up images by removing unwanted objects with precision

- **Background Removal:** Extract objects from backgrounds with ease

- **Download Transformed Images:** Save and share AI-transformed images conveniently

- **Transformed Image Details:** View details of transformations for each image

- **Transformation Management:** Control over deletion and updates of transformations

- **Credits System:** Earn or purchase credits for image transformations

- **Profile Page:** Access transformed images and credit information personally

- **Credits Purchase:** Securely buy credits via Stripe for uninterrupted use

- **Responsive UI/UX:** A seamless experience across devices with a user-friendly interface

and many more, including code architecture and reusability


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file.

```sh
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

```



## Run Locally

Clone the project

```bash
  git clone https://github.com/sohomofficial/imaginify.git
```

Go to the project directory

```bash
  cd image-searcher
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm run dev
```


## Credits

 - [Adrian Hajdin - JS Mastery](https://github.com/adrianhajdin)
 - [Build and Deploy a Full Stack AI SaaS Platform with Next js 14, TypeScript, Stripe](https://youtu.be/Ahwoks_dawU?si=ykCanyhrGzChgT5Y)



