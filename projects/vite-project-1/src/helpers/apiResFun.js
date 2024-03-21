async function resApiJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error(
        `Error al establecer comunicacion: ${res.status} ${res.statusText}`
      );
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error(error);
    return { data: null, error };
  }
}

export default resApiJson;
