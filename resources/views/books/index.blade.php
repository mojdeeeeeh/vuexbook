@extends('layouts.app')

@section('content')
<div class="container" id="root">

	{{-- Update form --}}
   {{--  <div v-show="isUpdateMode">
        @include('projects.edit')
    </div> --}}

	{{-- show form --}}
	<table class="table table-hover">
	    <thead>
	        <tr>
	            <th>title</th>
	            <th>date</th>
	            <th></th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr v-for="book in books">
	         
	            <td> @{{ book.title }} </td>
	            <td> @{{ book.date }} </td>
	            <td>
	            	
	            </td>
	        </tr>
	    </tbody>
	</table>
</div>
@endsection

@section('scripts')
<script src="{{ mix('js/book/index.js') }}" defer></script>

@endsection
