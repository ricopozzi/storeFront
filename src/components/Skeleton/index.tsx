import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonLoading = (props: any) => (
  <ContentLoader
    width={900}
    height={575}
    viewBox='0 0 720 575'
    backgroundColor='#d8d8d8'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='12' y='58' rx='22' ry='22' width='211' height='211' />
    <rect x='240' y='57' rx='22' ry='22' width='211' height='211' />
    <rect x='467' y='56' rx='22' ry='22' width='211' height='211' />
    <rect x='12' y='283' rx='22' ry='22' width='211' height='211' />
    <rect x='240' y='281' rx='22' ry='22' width='211' height='211' />
    <rect x='468' y='279' rx='22' ry='22' width='211' height='211' />
  </ContentLoader>
);
