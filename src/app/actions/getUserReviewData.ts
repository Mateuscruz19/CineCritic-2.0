type Res = {
  name: string;
  icon: string;
};

export default async function getAllReviewsData(userId: number): Promise<Res | null> {
  try {
    const res = await fetch(`/api/user/${userId}`);
    const data = await res.json();
    const { name, icon } = data.user;
    return { name: String(name), icon: String(icon) };
  } catch (error: any) {
    return null;
  }
}