"use client";
import { useMemo } from 'react';
import dynamic from 'next/dynamic'

export default function Geovisor() {
  const Map = useMemo(() => dynamic(
    () => import('./components/Map'),
    { 
      loading: () => <p></p>,
      ssr: false
    }
  ), [])

  return <div>
    <Map />
  </div>
}