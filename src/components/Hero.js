import HeroContent from "./HeroContent";

const mainFeaturedPost = {
  title: "Start building your sweet home here",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "MERN FURNITURE",
  linkText: "Shopping now",
};

export function Hero() {
  return <HeroContent post={mainFeaturedPost} />;
}
