export const onRequest: PagesFunction = async ({ request, next }) => {
  const { url } = request;
  const { pathname, searchParams } = new URL(url);

  if (
    pathname.includes("/post/") &&
    searchParams.get("password") !== "hunter2"
  ) {
    return new Response(null, { status: 401 });
  }

  return await next();
};
