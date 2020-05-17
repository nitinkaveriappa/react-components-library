import React from 'react';
import { Loader } from '../src';

export default {
  title: 'Loader',
  component: Loader,
};

export const DefaultComponentLoader = () => <Loader />;
export const ModalLoader = () => <Loader type="Modal" />;
export const ButtonLoader = () => <Loader size={15} type="Button" />;
export const LoaderSize = () => <Loader size={15} />;
export const LoaderColor = () => <Loader color="secondary" />;
