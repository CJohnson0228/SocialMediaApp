import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB is COnnected:' + process.env.MONGO_URI as string)
  } catch (error) {
    let errorMessage = 'MongoDB Failed to Connect'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    console.error(errorMessage)
    process.exit(1)
  }
}