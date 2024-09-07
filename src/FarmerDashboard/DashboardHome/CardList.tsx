import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface Card {
  title: string;
  count: number;
  description: string;
  isCurrency?: boolean;
  navigateTo: string;
}

export const getCardList = (): Card[] => {
  const orders = useSelector((state: AppState) => state.orders.orders) ?? [];

  const pendingOrdersCount = orders.filter(
    (order) => order.orderStatus === "pending"
  ).length;

  const settledOrdersCount = orders.filter(
    (order) => order.orderStatus === "settled"
  ).length;

  const totalRevenue = orders
    .filter((order) => order.orderStatus === "settled")
    .reduce((acc, order) => {
      return (
        acc +
        order.orderDetails.reduce(
          (orderAcc, item) => orderAcc + item.totalPrice,
          0
        )
      );
    }, 0);

  const cardList: Card[] = [
    {
      title: "Pending Orders",
      count: pendingOrdersCount,
      description: "28% increase from last month",
      navigateTo: "/farmer-dashboard/marketplace/orders/pending-orders",
    },
    {
      title: "Settled Orders",
      count: settledOrdersCount,
      description: "82% customer satisfaction",
      navigateTo: "/farmer-dashboard/marketplace/orders/settled-orders",
    },
    {
      title: "Your Revenue",
      count: totalRevenue,
      isCurrency: true,
      description: "17% increase",
      navigateTo: "/revenue",
    },
  ];

  return cardList;
};
