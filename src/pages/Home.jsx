import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";

const API = "http://localhost:5000/api/restaurants";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get(API).then((res) => setRestaurants(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Danh sách quán ăn 🍴</h1>
      <div className="grid gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r._id} data={r} />
        ))}
      </div>
    </div>
  );
}
