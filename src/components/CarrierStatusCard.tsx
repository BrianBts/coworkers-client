"use client";
import BoxLayout from "commons/BoxLayout";
import CarrierStatus from "commons/CarrierStatus";
import Status from "commons/Status";
import { Switch } from "commons/Switch";
import Title from "commons/Title";
import Image from "next/image";

interface CarrierProps {
  carrier: User;
}

interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  role: string;
  status: string;
  packages: Pack[];
}
interface Pack {
  _id: string;
  address: string;
  clientName: string;
  weight: number;
  deliverDate: string;
  status: string;
}

export default function CarrierStatusCard({ carrier }: CarrierProps) {
  return (
    <BoxLayout className="flex items-center   p-4 justify-between">
      <div className="flex gap-4 items-center">
        <Image
          src="/users/user1.jpeg"
          alt={carrier.name}
          width={100}
          height={50}
          className="rounded-lg "
        />

        <div>
          <Title>{carrier.name}</Title>
          <CarrierStatus status={carrier.status} />
        </div>
      </div>

      <Switch onChange={() => {}} />
    </BoxLayout>
  );
}