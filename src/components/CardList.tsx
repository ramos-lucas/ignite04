import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <>
      <SimpleGrid columns={3} gap="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={setImageUrl} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={imageUrl}
        isOpen={!!imageUrl}
        onClose={() => setImageUrl('')}
      />
    </>
  );
}
