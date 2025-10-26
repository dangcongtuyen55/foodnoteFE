import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";

const API = "https://food-notes-backend.onrender.com/api/restaurants";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get(API).then((res) => setRestaurants(res.data));
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Danh sách quán ăn 🍴</h1>
      <div className="grid gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r._id} data={r} />
        ))}
      </div>
    </div>
  );
}
