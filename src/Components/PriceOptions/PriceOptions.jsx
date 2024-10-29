import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      features: ["Access to gym equipment", "Locker room access", "Free Wi-Fi"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 35,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Access to group fitness classes",
        "Personal trainer consultation (once a month)",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Unlimited access to group fitness classes",
        "Weekly personal training sessions",
        "Access to sauna and steam room",
        "Nutrition consultation",
      ],
    },
  ];

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <h1 className="text-5xl text-center mb-8 lg:mb-12">
        Best Price In The Town
      </h1>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {priceOption.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
