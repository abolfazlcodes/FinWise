import { ReactNode } from 'react';

declare interface IOnBoardingProps {
  id: number;
  title: string;
  image: string;
}

declare interface ITabItemProps {
  id: number;
  title: string;
  content: string | ReactNode;
}

declare interface ITabProps {
  items: ITabItemProps[];
}

declare type TTransactionType = 'expense' | 'income';
