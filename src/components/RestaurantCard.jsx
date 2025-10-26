export default function RestaurantCard({ data }) {
  const openMap = () => window.open(data.mapUrl, "_blank");

  return (
    <div className="border p-3 rounded-xl shadow-sm flex gap-3 bg-white">
      {data.menuImage && (
        <img
          src={`http://localhost:5000${data.menuImage}`}
          alt="menu"
          className="w-20 h-20 object-cover rounded-lg"
        />
      )}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{data.name}</h2>
        <p
          onClick={openMap}
          className="text-blue-600 underline text-sm cursor-pointer"
        >
          {data.address}
        </p>
        <p className="text-sm mt-1">Đánh giá: {data.rating}</p>
        {data.note && <p className="text-gray-500 text-sm mt-1">{data.note}</p>}
      </div>
    </div>
  );
}
