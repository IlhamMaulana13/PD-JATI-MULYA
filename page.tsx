import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

interface Todo {
  id: string | number
  name?: string
  [key: string]: any
}

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = await createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo: Todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}