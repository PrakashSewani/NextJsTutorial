import { useRouter } from 'next/router'

export default function FruitID() {
    const router = useRouter()
    const { id } = router.query
  
    return <p> Fruit id: {id}</p>
}
