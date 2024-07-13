import React from 'react';

export interface LoadingProps {}


export default async function Loading({}: LoadingProps) {
  return (
    <div>
      loading...
    </div>
  );
}