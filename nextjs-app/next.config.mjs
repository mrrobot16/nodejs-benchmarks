// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/api/:path*', // Matched parameters can be used in the response
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this with your actual origin if needed
            { key: 'Access-Control-Allow-Methods', value: 'GET, PUT' },
            {
              key: 'Access-Control-Allow-Headers',
              value:
                'X-Tenant-ID, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            }
          ]
        }
      ]
    }
  }
  
  export default nextConfig
  