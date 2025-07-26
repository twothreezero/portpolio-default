import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(options) {
  // 관찰 상태를 저장할 state
  const [isIntersecting, setIsIntersecting] = useState(false);
  // 관찰할 요소를 참조할 ref
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // isIntersecting 상태를 업데이트
      setIsIntersecting(entry.isIntersecting);
    }, options);

    // ref.current (관찰할 요소)가 있으면 관찰 시작
    if (ref.current) {
      observer.observe(ref.current);
    }

    // 컴포넌트가 언마운트될 때 관찰을 중단하는 클린업 함수
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]); // ref나 options가 변경될 때만 effect를 다시 실행

  // ref와 관찰 상태를 반환
  return [ref, isIntersecting];
}

export default useIntersectionObserver;