import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered prompts</span> 
      </h1>
      <p className="desc text-center">
        Promptist is a platform for discovering and sharing AI prompts.
        Get started by exploring the prompts below and sharing your own.
      </p>
      <Feed />
    </section>
  )
}

export default Home