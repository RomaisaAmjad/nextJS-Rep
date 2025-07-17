// utils/asyncWrapper.js
export const asyncWrapper = (fn) => {
  return async (request) => {
    try {
      const data = await fn(request); 
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("AsyncWrapper Error:", err);
      return new Response(JSON.stringify({ message: err.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
};
