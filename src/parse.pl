use JSON;
my $csv = 'data.csv';
open(FH, '<', $csv) or die $!;
my @rows = <FH>;
close(FH);
use Data::Dumper;
sub rtrim { my $s = shift; $s =~ s/\s+$//;       return $s };
@rows = map { rtrim($_) } @rows;
@rows = map { [split(',',$_)] } @rows;

warn Dumper(\@rows);
my $output = {};
foreach my $row (@rows) {
    my @parts = split(" ",$row->[2]);
    my $color = $parts[0];
    $output->{$row->[0]}->{genomes}->{$row->[1]}->{color} = $color;
    $output->{$row->[0]}->{colors}->{$color} = 1;
    if ($parts[1] =~/\((\S*)\)/) {
        my $variant = $1;
        $output->{$row->[0]}->{genomes}->{$row->[1]}->{$variant} = 1;
        $output->{$row->[0]}->{$variant}->{$color} = $row->[1];
    }
    
}

foreach my $species (keys %$output) {
    $output->{$species}->{colors} = [sort keys %{ $output->{$species}->{colors}}];
}
warn Dumper($output);

my $json = JSON->new->allow_nonref;

my $json_text = $json->encode( $output );
 open(FH, '>', 'flowersNew.js') or die $!;
 print FH "export default { flowers:";
 print FH lc($json_text);
 print FH "}";
 close(FH);