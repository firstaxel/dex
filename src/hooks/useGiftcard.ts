import { useParams } from "next/navigation";

import { useMemo } from "react";

const useGiftcard = () => {
  const params = useParams();

  const giftcardId = useMemo(() => {
    if (!params?.giftcardId) {
      return "";
    }

    return params.giftcardId as string;
  }, [params?.giftcardId]);

  const isOpen = useMemo(() => !!giftcardId, [giftcardId]);

  return useMemo(
    () => ({
      isOpen,
      giftcardId,
    }),
    [isOpen, giftcardId]
  );
};

export default useGiftcard;
