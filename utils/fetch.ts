export async function postData(endpoint: string, data: Record<string, any>) {
  let response;

  try {
    response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong...");
    }

    return { success: true, message: responseData.message };
  } catch (error) {
    return { success: false, message: error };
  }
}
