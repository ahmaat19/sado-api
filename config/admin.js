module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f34f826f425d50133182066acaf24a3d'),
  },
});
