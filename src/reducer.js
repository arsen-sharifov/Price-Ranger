export const getItemData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
    return [];
  }
};
