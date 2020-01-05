<html>

<head>
  <title> @yield('title') </title>
  <link href="{{ asset('/css/app.css') }}" rel="stylesheet" type="text/css" />
</head>

<body>
  @include('shared.navbar')

  @yield('content')

  <script src="{{ asset('/js/app.js') }}" type="text/js') }}"></script>
</body>

</html>