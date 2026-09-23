function Question() {
  return (
    <div className="w-full px-10 py-6 text-white">
      <h3 className="text-[1.1rem] font-medium mb-4">Question</h3>

      <p className="text-[1.2rem] font-semibold mb-5">
        What is the capital city of France?
      </p>

      <input
        type="text"
        placeholder="Type your answer here"
        className="w-[420px] h-[44px] rounded-md border border-white/60 bg-transparent px-3 text-white placeholder:text-white/80 outline-none"
      />
    </div>
  );
}

export default Question;