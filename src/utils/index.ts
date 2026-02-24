export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function getImagePath(imageUrl: string) {
  const cloudinaryBaseURL = 'https://res.cloudinary.com';
  if(imageUrl.startsWith(cloudinaryBaseURL)) {
    return imageUrl
  } else {
    return `/products/${imageUrl}.jpg`
  }
}