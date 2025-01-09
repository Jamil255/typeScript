interface UserInfo {
  name: string
  email: string
  password: string
  google_id: string
  isActive: boolean
  startTrail: boolean
}

interface UserInfo {
  githubToken: string
  faceBookId: string
}

interface AdminInfo extends UserInfo {
  adminId: string
}

const data: AdminInfo = {
  adminId: '12l2k',
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  google_id: 'google123',
  isActive: true,
  startTrail: false,
  githubToken: 'github123',
  faceBookId: 'facebook123',
}
