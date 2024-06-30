interface UsedInstanceInterface {
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

interface InstanceInfoInterface {
  instance: UsedInstanceInterface;
  ridtos: RIInterface[];
}

interface NotificationItemProps {
  instanceInfo: InstanceInfoInterface;
}

interface NotificationDetailsProps {
  RIList: RIInterface[];
}

export type {
  UsedInstanceInterface,
  RIInterface,
  InstanceInfoInterface,
  NotificationItemProps,
  NotificationDetailsProps,
};
