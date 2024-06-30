interface usedInstanceInterface {
  instanceType: string;
  cost: number;
  os: string;
  region: string;
}

interface RIInterface {
  instanceType: string;
  price: number;
  os: string;
  duration: number;
}

interface instanceInfoInterface {
  instance: usedInstanceInterface;
  ridtos: RIInterface[];
}

interface notificationItemProps {
  instanceInfo: instanceInfoInterface;
}

interface NotificationDetailsProps {
  RIList: RIInterface[];
}

export type {
  usedInstanceInterface,
  RIInterface,
  instanceInfoInterface,
  notificationItemProps,
  NotificationDetailsProps
};
