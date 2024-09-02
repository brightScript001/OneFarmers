import { useOrderContext } from "../../context/orderProvider";
import { Order } from "../MarketPlace/Orders/OrdersList/Types";

interface Card {
  title: string;
  count: number;
  description: string;
  isCurrency?: boolean;
  navigateTo: string;
}

export const getCardList = (): Card[] => {
  const { orders } = useOrderContext();

  const pendingOrdersCount = orders.filter(
    (order: Order) => order.orderStatus === "pending"
  ).length;

  const settledOrdersCount = orders.filter(
    (order: Order) => order.orderStatus === "settled"
  ).length;

  const totalRevenue = orders
    .filter((order: Order) => order.orderStatus === "settled")
    .reduce((acc: number, order: Order) => {
      return (
        acc +
        order.orderDetails.reduce(
          (orderAcc: number, item) => orderAcc + item.totalPrice,
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
