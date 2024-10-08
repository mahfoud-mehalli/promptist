import Link from "next/link";


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return(
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a post to share with the community, and let others know what you think.
      </p>
      <form
        className="w-full max-w-2xl flex flex-col mt-10 gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Prompt Tag {" "}
            <span className="font-normal">(#product, #web-dev, #idea)</span>
          </span>
          <input 
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Add tags to your prompt..."
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">Cancel</Link>
          <button 
            type="submit" 
            disabled={submitting} 
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  ) 
};

export default Form;
